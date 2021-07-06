# Ruby sample app using Unicorn web server

## Building

```bash
pack build unicorn-sample --buildpack gcr.io/paketo-buildpacks/ruby --builder paketobuildpacks/builder:base
```

## Running

```bash
docker run --interactive --tty --env PORT=8080 --publish 8080:8080 unicorn-sample
```

## Viewing

```bash
curl http://localhost:8080
```
