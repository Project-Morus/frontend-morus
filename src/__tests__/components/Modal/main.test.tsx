import { render, screen, fireEvent, getByRole } from "@testing-library/react";
import Modal from "../../../components/Modal";
import { withTheme } from "../../../helpers/withTheme";
import Backdrop from "../../../components/Modal/parts/Backdrop";

const ModalWithTheme = withTheme(Modal);
const BackdropWithTheme = withTheme(Backdrop);
const modalElement = "modal";
const modalChildrenText = "Teste";

// Crie um elemento do DOM para o portal no ambiente de teste
const portalRoot = document.createElement("div");
portalRoot.id = "portal";
document.body.appendChild(portalRoot);

describe("Backdrop Component", () => {
  it("Verify if component is rendering", () => {
    // Renderize o componente
    const { getByRole } = render(
      <BackdropWithTheme open closeModal={() => {}} role="backdrop">
        <h1>{modalChildrenText}</h1>
      </BackdropWithTheme>
    );
    const backdropElement = getByRole("backdrop");

    expect(backdropElement).toBeInTheDocument();
  });
});

describe("Modal Component", () => {
  it("Verify if component is rendering", () => {
    render(
      <ModalWithTheme open closeModal={() => {}} onConfirmModal={() => {}} role="modal">
        <h1>{modalChildrenText}</h1>
      </ModalWithTheme>
    );

    expect(screen.getByRole(modalElement)).toBeVisible();
    expect(screen.getByText(modalChildrenText)).toBeInTheDocument();
  });

  test("Snapshot Modal", () => {
    const { asFragment } = render(
      <ModalWithTheme open closeModal={() => {}} onConfirmModal={() => {}} role="modal">
        <h1>{modalChildrenText}</h1>
      </ModalWithTheme>
    );

    expect(asFragment()).toMatchSnapshot();
  });
  test("Snapshot Modal with variant warning", () => {
    const { asFragment } = render(
      <ModalWithTheme open closeModal={() => {}} onConfirmModal={() => {}} role="modal" variant="warning">
        <h1>{modalChildrenText}</h1>
      </ModalWithTheme>
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
        modalTitle={modalChildrenText}
      >
        <h1>{modalChildrenText}</h1>
      </ModalWithTheme>
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
