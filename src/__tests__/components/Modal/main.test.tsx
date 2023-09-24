import { render, screen } from "@testing-library/react";
import Modal from "../../../components/Modal";
import { withTheme } from "../../../helpers/withTheme";

const ModalWithTheme = withTheme(Modal);
const modalElement = "modal";
const modalChildrenText = "Teste";

const closeModalFn = jest.fn();
const confirmModalFn = jest.fn();

describe("Modal Component", () => {
  let container: HTMLElement;

  beforeEach(() => {
    container = document.createElement("div");
    container.id = "portal";
    document.body.appendChild(container);
  });

  afterEach(() => {
    if (container) {
      container.remove();
    }
  });
  test("Verify if component is rendering", () => {
    render(
      <ModalWithTheme open closeModal={closeModalFn} onConfirmModal={confirmModalFn} role="modal">
        <h1>{modalChildrenText}</h1>
      </ModalWithTheme>,
      { container }
    );

    expect(screen.getByRole(modalElement)).toBeVisible();
    expect(screen.getByText(modalChildrenText)).toBeInTheDocument();
  });

  test("Snapshot Modal", () => {
    const { asFragment } = render(
      <ModalWithTheme open closeModal={closeModalFn} onConfirmModal={confirmModalFn} role="modal">
        <h1>{modalChildrenText}</h1>
      </ModalWithTheme>,
      { container }
    );

    expect(asFragment()).toMatchSnapshot();
  });
  test("Snapshot Modal with variant warning", () => {
    const { asFragment } = render(
      <ModalWithTheme open closeModal={closeModalFn} onConfirmModal={confirmModalFn} role="modal" variant="warning">
        <h1>{modalChildrenText}</h1>
      </ModalWithTheme>,
      { container }
    );

    expect(asFragment()).toMatchSnapshot();
  });

  test("Snapshot Modal with variant form", () => {
    const { asFragment } = render(
      <ModalWithTheme
        open
        closeModal={() => {}}
        onConfirmModal={() => {}}
        role="modal"
        variant="form"
        iconName="ph-user"
        modalTitle="Modal Content"
      >
        <h1>Modal Content</h1>
      </ModalWithTheme>,
      { container }
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
