// ABI Schema Library
"use strict"

import { builders as b } from "ast-types"
import validateAst from "./validate"

export default compile

function compile(schemas, opts) {
    const _schemas = processSchemas(schemas, opts)
    const exportStatement = b.expressionStatement(
        b.assignmentExpression(
            "=",
            b.memberExpression(
                b.identifier("module"),
                b.identifier("exports")
            ),
            b.objectExpression(
                _schemas.map((s) =>
                    b.property(
                        "init",
                        b.literal(s.key),
                        b.identifier(s.funcName)
                    )
                )
            )
        )
    )

    let statements = [exportStatement]

    _schemas.forEach(
        (s) => (statements = statements.concat(compileSchema(s)))
    )

    return b.program(statements)

    function compileSchema(sch) {
        return [
            b.functionDeclaration(
                b.identifier(sch.funcName),
                ["data"].map(b.identifier),
                b.blockStatement(validateAst(sch.schema))
            ),
        ]
    }
}

function processSchemas(schemas, _opts) {
    return schemas.map((s, i) => ({
        key: s.$id,
        funcName: "validate" + i,
        schema: s,
    }))
}
