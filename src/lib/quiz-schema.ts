import { z } from "zod";

export const quizSchema = z.object({
  stream: z.enum(["maths", "bio", "commerce", "arts"], {
    message: "Choose the stream you plan to take after Class 10.",
  }),
  interests: z
    .array(z.string())
    .min(1, { message: "Pick at least one thing you enjoy." }),
  flags: z.array(z.string()).max(3),
});

export type QuizValues = z.infer<typeof quizSchema>;
export type QuizStream = QuizValues["stream"];
