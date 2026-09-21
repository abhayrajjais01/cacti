window.BENCHMARK_DATA = {
  "lastUpdate": 1790002492366,
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
      }
    ]
  }
}