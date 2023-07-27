
    @echo off
    python -m venv env
    call env\Scripts\activate
    pip install flask
    call env\Scripts\deactivate
    