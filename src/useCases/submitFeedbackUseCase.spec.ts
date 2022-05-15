import { SubmitFeedbackUseCase } from "./submitFeedbackUseCase";

describe("Submit feedback", () => {
  it("should be able to submit a feedback", async () => {
    const submitFeedbackUseCase = new SubmitFeedbackUseCase(
      { create: async () => {} },
      { sendMail: async () => {} }
    );

    await expect(
      submitFeedbackUseCase.execute({
        type: "BUG",
        comment: "example comment",
        screenshot: "data:image/png;base64,testebase64",
      })
    ).resolves.not.toThrow();
  });
});
