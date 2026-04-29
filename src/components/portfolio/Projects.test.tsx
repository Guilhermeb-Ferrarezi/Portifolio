import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";

import { Projects } from "./Projects";

describe("Projects", () => {
  it("opens project details with screenshots and github link for Portal do Aluno", async () => {
    const user = userEvent.setup();
    render(<Projects />);

    await user.click(screen.getByRole("button", { name: /abrir detalhes do portal do aluno/i }));

    const dialog = screen.getByRole("dialog", { name: /portal do aluno/i });

    expect(within(dialog).getByRole("link", { name: /abrir repositorio no github/i })).toHaveAttribute(
      "href",
      "https://github.com/Guilhermeb-Ferrarezi/Portal-do-aluno",
    );
    expect(within(dialog).getByRole("img", { name: /portal do aluno - painel administrativo/i })).toBeVisible();
    expect(within(dialog).getByRole("heading", { name: "Admin" })).toBeVisible();
    expect(within(dialog).getByRole("heading", { name: "Estudantes" })).toBeVisible();
  });
});
