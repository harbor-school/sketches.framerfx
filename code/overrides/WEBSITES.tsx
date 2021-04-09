import * as React from "react"
import { Override } from "framer"
import * as System from "../../../../lighthouse"
import { getCurrentTheme, getThemeByKey } from "../utils"

export function Account_ProgressBar(): Override {
  const theme = getThemeByKey(getCurrentTheme())

  return {
    overrides: {
      Wrap: {
        background: theme.colors.backgroundTertiary,
      },
    },
  }
}
