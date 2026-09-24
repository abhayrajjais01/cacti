window.BENCHMARK_DATA = {
  "lastUpdate": 1790255982972,
  "repoUrl": "https://github.com/abhayrajjais01/cacti",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "name": "luka73",
            "username": "lukacoff",
            "email": "lukas.mastilak@stuba.sk"
          },
          "committer": {
            "name": "Rafael Belchior",
            "username": "RafaelAPB",
            "email": "RafaelAPB@users.noreply.github.com"
          },
          "id": "5fa76bd65e52420f97db0e66d283ae0b319f7580",
          "message": "fix(satp-hermes): use bigint for ERC-6909/ERC-721 uniqueDescriptor\n\nUniqueTokenID (used for ERC-6909/ERC-721 uniqueDescriptor) was branded\nas number. Since on-chain token IDs are uint256, any value above\nNumber.MAX_SAFE_INTEGER silently loses precision when passed through\nNumber(), corrupting the token ID used for cross-chain asset transfer.\n\nFixes #4703\n\nAssisted-by: anthropic:claude-sonnet-5\nSigned-off-by: luka73 <lukas.mastilak@stuba.sk>",
          "timestamp": "2026-08-28T13:13:36Z",
          "url": "https://github.com/abhayrajjais01/cacti/commit/5fa76bd65e52420f97db0e66d283ae0b319f7580"
        },
        "date": 1789650086526,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "cmd-api-server_HTTP_GET_getOpenApiSpecV1",
            "value": 655,
            "range": "±2.63%",
            "unit": "ops/sec",
            "extra": "175 samples"
          },
          {
            "name": "cmd-api-server_gRPC_GetOpenApiSpecV1",
            "value": 667,
            "range": "±2.16%",
            "unit": "ops/sec",
            "extra": "180 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "luka73",
            "username": "lukacoff",
            "email": "lukas.mastilak@stuba.sk"
          },
          "committer": {
            "name": "Rafael Belchior",
            "username": "RafaelAPB",
            "email": "RafaelAPB@users.noreply.github.com"
          },
          "id": "5fa76bd65e52420f97db0e66d283ae0b319f7580",
          "message": "fix(satp-hermes): use bigint for ERC-6909/ERC-721 uniqueDescriptor\n\nUniqueTokenID (used for ERC-6909/ERC-721 uniqueDescriptor) was branded\nas number. Since on-chain token IDs are uint256, any value above\nNumber.MAX_SAFE_INTEGER silently loses precision when passed through\nNumber(), corrupting the token ID used for cross-chain asset transfer.\n\nFixes #4703\n\nAssisted-by: anthropic:claude-sonnet-5\nSigned-off-by: luka73 <lukas.mastilak@stuba.sk>",
          "timestamp": "2026-08-28T13:13:36Z",
          "url": "https://github.com/abhayrajjais01/cacti/commit/5fa76bd65e52420f97db0e66d283ae0b319f7580"
        },
        "date": 1789650340489,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "plugin-ledger-connector-besu_HTTP_GET_getOpenApiSpecV1",
            "value": 1242,
            "range": "±2.59%",
            "unit": "ops/sec",
            "extra": "181 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "luka73",
            "username": "lukacoff",
            "email": "lukas.mastilak@stuba.sk"
          },
          "committer": {
            "name": "Rafael Belchior",
            "username": "RafaelAPB",
            "email": "RafaelAPB@users.noreply.github.com"
          },
          "id": "5fa76bd65e52420f97db0e66d283ae0b319f7580",
          "message": "fix(satp-hermes): use bigint for ERC-6909/ERC-721 uniqueDescriptor\n\nUniqueTokenID (used for ERC-6909/ERC-721 uniqueDescriptor) was branded\nas number. Since on-chain token IDs are uint256, any value above\nNumber.MAX_SAFE_INTEGER silently loses precision when passed through\nNumber(), corrupting the token ID used for cross-chain asset transfer.\n\nFixes #4703\n\nAssisted-by: anthropic:claude-sonnet-5\nSigned-off-by: luka73 <lukas.mastilak@stuba.sk>",
          "timestamp": "2026-08-28T13:13:36Z",
          "url": "https://github.com/abhayrajjais01/cacti/commit/5fa76bd65e52420f97db0e66d283ae0b319f7580"
        },
        "date": 1790002182557,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "cmd-api-server_HTTP_GET_getOpenApiSpecV1",
            "value": 833,
            "range": "±3.48%",
            "unit": "ops/sec",
            "extra": "176 samples"
          },
          {
            "name": "cmd-api-server_gRPC_GetOpenApiSpecV1",
            "value": 827,
            "range": "±3.24%",
            "unit": "ops/sec",
            "extra": "179 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "luka73",
            "username": "lukacoff",
            "email": "lukas.mastilak@stuba.sk"
          },
          "committer": {
            "name": "Rafael Belchior",
            "username": "RafaelAPB",
            "email": "RafaelAPB@users.noreply.github.com"
          },
          "id": "5fa76bd65e52420f97db0e66d283ae0b319f7580",
          "message": "fix(satp-hermes): use bigint for ERC-6909/ERC-721 uniqueDescriptor\n\nUniqueTokenID (used for ERC-6909/ERC-721 uniqueDescriptor) was branded\nas number. Since on-chain token IDs are uint256, any value above\nNumber.MAX_SAFE_INTEGER silently loses precision when passed through\nNumber(), corrupting the token ID used for cross-chain asset transfer.\n\nFixes #4703\n\nAssisted-by: anthropic:claude-sonnet-5\nSigned-off-by: luka73 <lukas.mastilak@stuba.sk>",
          "timestamp": "2026-08-28T13:13:36Z",
          "url": "https://github.com/abhayrajjais01/cacti/commit/5fa76bd65e52420f97db0e66d283ae0b319f7580"
        },
        "date": 1790002489678,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "plugin-ledger-connector-besu_HTTP_GET_getOpenApiSpecV1",
            "value": 866,
            "range": "±3.52%",
            "unit": "ops/sec",
            "extra": "180 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "Sandeep Nishad",
            "username": "sandeepnRES",
            "email": "sandeepn.official@gmail.com"
          },
          "id": "1755e91279751331a4306ccb73291278c685132a",
          "message": "build(deps): bump react-router\n\nBumps the npm-security group with 1 update in the / directory: [react-router](https://github.com/remix-run/react-router/tree/HEAD/packages/react-router).\n\nUpdates `react-router` from 6.30.4 to 6.30.6\n- [Release notes](https://github.com/remix-run/react-router/releases)\n- [Changelog](https://github.com/remix-run/react-router/blob/react-router@6.30.6/packages/react-router/CHANGELOG.md)\n- [Commits](https://github.com/remix-run/react-router/commits/react-router@6.30.6/packages/react-router)\n\n---\nupdated-dependencies:\n- dependency-name: react-router\n  dependency-version: 6.30.6\n  dependency-type: indirect\n  dependency-group: npm-security\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nSigned-off-by: Sandeep Nishad <sandeepn.official@gmail.com>",
          "timestamp": "2026-08-31T22:43:50Z",
          "url": "https://github.com/abhayrajjais01/cacti/commit/1755e91279751331a4306ccb73291278c685132a"
        },
        "date": 1790255354310,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "cmd-api-server_HTTP_GET_getOpenApiSpecV1",
            "value": 855,
            "range": "±3.34%",
            "unit": "ops/sec",
            "extra": "179 samples"
          },
          {
            "name": "cmd-api-server_gRPC_GetOpenApiSpecV1",
            "value": 870,
            "range": "±3.61%",
            "unit": "ops/sec",
            "extra": "180 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "Sandeep Nishad",
            "username": "sandeepnRES",
            "email": "sandeepn.official@gmail.com"
          },
          "id": "1755e91279751331a4306ccb73291278c685132a",
          "message": "build(deps): bump react-router\n\nBumps the npm-security group with 1 update in the / directory: [react-router](https://github.com/remix-run/react-router/tree/HEAD/packages/react-router).\n\nUpdates `react-router` from 6.30.4 to 6.30.6\n- [Release notes](https://github.com/remix-run/react-router/releases)\n- [Changelog](https://github.com/remix-run/react-router/blob/react-router@6.30.6/packages/react-router/CHANGELOG.md)\n- [Commits](https://github.com/remix-run/react-router/commits/react-router@6.30.6/packages/react-router)\n\n---\nupdated-dependencies:\n- dependency-name: react-router\n  dependency-version: 6.30.6\n  dependency-type: indirect\n  dependency-group: npm-security\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nSigned-off-by: Sandeep Nishad <sandeepn.official@gmail.com>",
          "timestamp": "2026-08-31T22:43:50Z",
          "url": "https://github.com/abhayrajjais01/cacti/commit/1755e91279751331a4306ccb73291278c685132a"
        },
        "date": 1790255979692,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "plugin-ledger-connector-besu_HTTP_GET_getOpenApiSpecV1",
            "value": 826,
            "range": "±4.09%",
            "unit": "ops/sec",
            "extra": "179 samples"
          }
        ]
      }
    ]
  }
}