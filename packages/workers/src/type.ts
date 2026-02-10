import { Hono } from 'hono'

type HonoEnv = {
  Bindings: {
    HIYOCORD_SECRET: string
  }
}

export const app = new Hono<HonoEnv>()
export type HonoApp = typeof app
