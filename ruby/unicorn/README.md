# Ruby example app using Unicorn

## Building

```bash
pack build unicorn-sample --buildpack gcr.io/paketo-buildpacks/ruby --builder paketobuildpacks/builder:base
```

## Running

```bash
docker run -it --rm --env PORT=8080 -p 8080:8080 unicorn-sample
```

## Viewing

```bash
curl http://localhost:8080
```
