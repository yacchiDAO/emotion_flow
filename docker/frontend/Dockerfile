FROM node:24-alpine

WORKDIR /app

COPY frontend/package.json /app/package.json
COPY frontend/package-lock.json /app/package-lock.json

RUN npm install

COPY frontend .

RUN chown -R node:node /app # 所有者を node ユーザーに変更
RUN chmod -R 777 /app       # 全てのユーザーに読み書き実行権限を付与

# ポート3001を公開
EXPOSE 3001

# Next.jsアプリケーションのエントリーポイントは docker-compose.yml で定義