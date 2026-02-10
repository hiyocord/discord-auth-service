import { registry } from "./register";

export default {
  registry,
  service: {
    baseUrl: "https://discord-auth-service.kurages.workers.dev",
    id: "org.hiyocord.discord-auth",
    name: "discord auth",
    description: "discord auth service for hiyocord",
    permissions: [
    ],
    messageComponentIds: [],
    modalSubmitIds: []
  },
  signing: {
    algorithm: process.env["ALGORITHM"],
    publicKey: process.env["PUBLIC_KEY"]
  }
}

