### ローカルサーバー起動

```bash
yarn install
yarn dev
```

### 静的ファイル生成

```bash
yarn build
```

### envファイルのコピー

```bash
cp .env.sample .env
```

### tailwindcss カスタム

```bash
clamp-XX-[minSize,maxSize,minDisplayWidth,maxDisplyaWidth]
```

クラス名↑で clamp を設定してくれる(tailwind.config.js参照)

### ライブラリはこまめにアップデート

```bash
yarn upgrade-interactive --latest
```
