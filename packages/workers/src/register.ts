import { SimpleInteractionHandlerRegistry, SimpleInteractionHandlerResolver } from '@hiyocord/discord-interaction-client';
import { InteractionType } from 'discord-api-types/v10';
import authInit from './commands/auth-init';

export const registry = new SimpleInteractionHandlerRegistry();

[
  authInit,
].forEach(handler => {
  registry.register(InteractionType.ApplicationCommand, handler);
});

export const resolver = new SimpleInteractionHandlerResolver(registry);
