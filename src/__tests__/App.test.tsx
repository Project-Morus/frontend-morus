import { render } from "@testing-library/react"
import App from "../App"

describe('Main component that renders all components', () => {
  test("Renders the main page", () => {
    render(<App />)
    expect(true).toBeTruthy()
  })
})
