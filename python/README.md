# Python Sample App

## Building

```bash
pack build --builder=gcr.io/buildpacks/builder sample-python
```

## Running

```bash
docker run -it -ePORT=8080 -p8080:8080 sample-python
```

## Viewing

```bash
curl http://localhost:8080
```
