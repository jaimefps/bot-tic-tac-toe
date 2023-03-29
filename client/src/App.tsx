import { useEffect, useState } from "react"
import { GameState } from "./GameState"
import { useVanillaState } from "use-vanilla-state"
import { useGetBotMoveLazyQuery } from "../generated/graphql-codegen"
import Thinking from "./assets/thinking.png"
import "./App.css"

function shouldHighlight(x: number, y: number, game: GameState) {
  return (
    game.winState()?.line?.some(([thisY, thisX]) => {
      return thisY === y && thisX === x
    }) ?? false
  )
}

function getClassNames(x: number, y: number, game: GameState) {
  const lx = `loc-x-${x}`
  const ly = `loc-y-${y}`
  const end = !!game.winState() ? "finished" : ""
  const active = game.boardState()[y][x] ? "disabled" : "enabled"
  const highlight = shouldHighlight(x, y, game) ? "highlight" : ""
  return `box ${active} ${highlight} ${end} ${lx} ${ly}`
}

function makeBoxProps(
  x: number,
  y: number,
  game: GameState,
  thinking: boolean
) {
  const content = game.boardState()[y][x]
  return {
    children: content,
    className: getClassNames(x, y, game),
    onClick: () => game.play({ x, y }),
    disabled: thinking || Boolean(content ?? game.winState()),
  }
}

function App() {
  const game = useVanillaState(GameState)
  const winDetails = game.winState()
  const playCount = game.playCount()

  const [getMove, { data, loading }] = useGetBotMoveLazyQuery()
  const [cheated, setCheated] = useState(false)

  useEffect(() => {
    if (winDetails) {
      return
    }

    if (playCount % 2 !== 0) {
      getMove({
        variables: {
          boardState: JSON.stringify(game.boardState()),
        },
      })
    }
  }, [playCount, winDetails])

  useEffect(() => {
    if (data) {
      const result = data?.aiData?.move ?? "null"
      type Move = { position: [number, number] }
      const move: Move = JSON.parse(result)

      if (move) {
        game.play({
          x: move.position[0],
          y: move.position[1],
        })
      }
    }
  }, [data])

  return (
    <div className="App">
      {winDetails?.mark === "DRAW" ? (
        <h1>Draw</h1>
      ) : winDetails ? (
        <h1>Winner: {winDetails.mark}</h1>
      ) : (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
          }}
        >
          <div style={{ position: "relative" }}>
            <h1>
              <span>Turn: {game.turn()}</span>
            </h1>
            {loading && (
              <img
                src={Thinking}
                style={{
                  position: "absolute",
                  right: "40%",
                  top: -18,
                  height: 16,
                  width: 14,
                }}
              />
            )}
          </div>
        </div>
      )}

      <div className="board">
        <div className="row">
          <button {...makeBoxProps(0, 0, game, loading)} />
          <button {...makeBoxProps(0, 1, game, loading)} />
          <button {...makeBoxProps(0, 2, game, loading)} />
        </div>
        <div className="row">
          <button {...makeBoxProps(1, 0, game, loading)} />
          <button {...makeBoxProps(1, 1, game, loading)} />
          <button {...makeBoxProps(1, 2, game, loading)} />
        </div>
        <div className="row">
          <button {...makeBoxProps(2, 0, game, loading)} />
          <button {...makeBoxProps(2, 1, game, loading)} />
          <button {...makeBoxProps(2, 2, game, loading)} />
        </div>
      </div>

      <button
        disabled={!playCount}
        onClick={() => game.restart()}
        className={`btn ${playCount ? "show" : "hide"}`}
      >
        restart
      </button>
    </div>
  )
}

export default App
