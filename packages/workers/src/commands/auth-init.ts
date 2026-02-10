import { ApplicationCommandHandler, createBuilder } from "@hiyocord/discord-interaction-client";
import { ComponentType } from 'discord-api-types/v10';

export default {
  name: "authinit",
  description: "test command",
  guildIds: ["1195385456976724068", "1463504106210590732"],
  handle: async c => {
    return createBuilder(c)
      .modal()
      .build(
        "title",
        "auth-init-model",
        [{
          type: ComponentType.ActionRow,
          components: [
            {
              type: ComponentType.TextInput,
              id: 1,
              custom_id: "input1",
              style: 1,
              label: "input label",
              min_length: 0,
              max_length: 4000,
              required: true,
              value: "",
              placeholder: "input placeholder",
            },
          ],
        }]
      ) as any;
  }
} satisfies ApplicationCommandHandler;
