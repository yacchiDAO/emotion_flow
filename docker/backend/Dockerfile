FROM ruby:3.2.4-slim-bookworm

RUN apt-get update -qq && apt-get install -y --no-install-recommends \
    build-essential \
    ca-certificates \
    libmariadb-dev \
    libpq-dev \
    nodejs \
    yarn

WORKDIR /app

COPY backend/Gemfile /app/Gemfile
COPY backend/Gemfile.lock /app/Gemfile.lock

RUN bundle install --jobs=$(nproc) --retry=3

COPY backend .

# ポート3000を公開
EXPOSE 3000

# Railsアプリケーションのエントリーポイントは docker-compose.yml で定義