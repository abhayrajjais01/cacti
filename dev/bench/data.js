window.BENCHMARK_DATA = {
  "lastUpdate": 1788789332749,
  "repoUrl": "https://github.com/abhayrajjais01/cacti",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "name": "Parth Singh",
            "username": "ParthSinghPS",
            "email": "posiedon.1721@gmail.com"
          },
          "committer": {
            "name": "Sandeep Nishad",
            "username": "sandeepnRES",
            "email": "sandeepn.official@gmail.com"
          },
          "id": "98b232c55d21e1bac5d104ac6ea56c0da1317ceb",
          "message": "docs(mkdocs): update SATP navigation and ledger support\n\nAddresses #4596\n\nAdd the Cacti Demos use-cases reference.\n\nReplace fragmented ledger support pages with a concise list that links\nsupported ledgers to their connector documentation.\n\nRename the documentation section to SATP, distinguish SATP Hermes from\nSATP Weaver, and link Weaver to its SATP protocol specification.\n\nRemove the remaining stale xDai references from active configuration.\n\nAssisted-by: openai:gpt-5\nSigned-off-by: Parth Singh <posiedon.1721@gmail.com>",
          "timestamp": "2026-09-01T15:35:09Z",
          "url": "https://github.com/abhayrajjais01/cacti/commit/98b232c55d21e1bac5d104ac6ea56c0da1317ceb"
        },
        "date": 1788789330025,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "cmd-api-server_HTTP_GET_getOpenApiSpecV1",
            "value": 628,
            "range": "±2.96%",
            "unit": "ops/sec",
            "extra": "175 samples"
          },
          {
            "name": "cmd-api-server_gRPC_GetOpenApiSpecV1",
            "value": 640,
            "range": "±2.21%",
            "unit": "ops/sec",
            "extra": "184 samples"
          }
        ]
      }
    ]
  }
}