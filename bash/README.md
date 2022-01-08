# Bash Script example app

## Building

```bash
pack build myapp --buildpack cage1016/shell-run-cnb@1.0.0 --builder gcr.io/buildpacks/builder:v1
```

## Running

```bash
docker run --rm myapp
```
