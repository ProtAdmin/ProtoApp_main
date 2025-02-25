import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: "export", // 🔥 S3 にアップロードするために必要
  images: { unoptimized: true }, // 画像最適化を無効化（S3では最適化不要）
};

export default nextConfig;
