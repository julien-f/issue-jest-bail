`--watch` breaks on error when `--bail` is used.

```
> yarn
> yarn run dev-test
```

Then comment [this line](https://github.com/julien-f/issue-jest-bail-watch/blob/master/index.spec.js#L4)
to remove the error and you can see that the test is not rerun.
