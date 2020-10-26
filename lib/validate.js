"use strict"

import { builders as b } from "ast-types"
import jsonGrammar from "./jsonGrammar"

export default function validateAst(_schema) {
    return [b.returnStatement(b.literal(true))]
}
