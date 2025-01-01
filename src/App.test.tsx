import { setupRender, screen } from "./testing";

test("Vitest sanity check", () => {
  expect(1 + 1 === 2);
});

const ButtonComponent = ({ handleOnClick }: { handleOnClick: () => void }) => {
  return <button onClick={handleOnClick}>Random component</button>
}

describe('Button Component',() => {
  it('renders correctly and mocks function', async () => {
    const handleClickFn = vi.fn()
    const { user } = setupRender(<ButtonComponent handleOnClick={handleClickFn} />)
    
    screen.debug() // Logs the DOM structure

    // Read the element in the DOM
    const element = screen.getByText(/Random Component/i)
    expect(element).toBeInTheDocument()

    // Click the button
    await user.click(element)
    expect(handleClickFn).toHaveBeenCalledOnce()
  })
})