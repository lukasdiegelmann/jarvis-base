#! /usr/bin/env node

require("../dist/workspace.bundle.js").workspace.default(process.cwd(), ...process.argv);
