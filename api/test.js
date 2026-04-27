export const config = { runtime: "edge" };

export default function handler(req) {
  return new Response("hello");
}
