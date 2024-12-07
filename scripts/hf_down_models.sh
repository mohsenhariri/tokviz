#!/bin/bash

source .hf_token.sh

export HF_HUB_ENABLE_HF_TRANSFER=1
export HF_HOME="./"

chmod -R 755 $HF_HOME

mistral=(
    "mistralai/Mistral-7B-v0.1"
    "mistralai/Mathstral-7B-v0.1"
    "mistralai/Mistral-7B-v0.3"
    "mistralai/Mistral-7B-Instruct-v0.3"
)

llama3_2=(
    "meta-llama/Llama-3.2-1B"
    "meta-llama/Llama-3.2-1B-Instruct"
    "meta-llama/Llama-3.2-3B"
    "meta-llama/Llama-3.2-3B-Instruct"
)

llama3_1=(
    "meta-llama/Llama-3.1-8B"
    "meta-llama/Llama-3.1-8B-Instruct"
    "meta-llama/Llama-3.1-70B"
    "meta-llama/Llama-3.1-70B-Instruct"
    "meta-llama/Llama-3.1-405B-Instruct"
)

llama3=(
    "meta-llama/Meta-Llama-3-8B"
    "meta-llama/Meta-Llama-3-8B-Instruct"
    "meta-llama/Meta-Llama-3-70B"
    "meta-llama/Meta-Llama-3-70B-Instruct"
)

llama2=(
    "meta-llama/Llama-2-7b-hf"
    "meta-llama/Llama-2-7b-chat-hf"
    "meta-llama/Llama-2-13b-hf"
    "meta-llama/Llama-2-13b-chat-hf"
    "meta-llama/Llama-2-70b-hf"
    "meta-llama/Llama-2-70b-chat-hf"
)

gpt=(
    "openai-community/gpt2"        # 124M parameters
    "openai-community/gpt2-medium" # 355M parameters
    "openai-community/gpt2-large"  # 774M parameters
    "openai-community/gpt2-xl"     # 1.5B parameters
)

nvidia=(
    "nvidia/Llama-3.1-Nemotron-70B-Instruct-HF"
)

gemma=(
    "google/gemma-2-2b"
    "google/gemma-2-2b-it"
    "google/gemma-2-9b"
    "google/gemma-2-9b-it"
    "google/gemma-2-27b"
    "google/gemma-2-27b-it"
    "google/recurrentgemma-2b"
    "google/recurrentgemma-2b-it"
    "google/recurrentgemma-9b"
    "google/recurrentgemma-9b-it"
)

phi=(
    "microsoft/Phi-3-medium-128k-instruct"
    "microsoft/Phi-3-mini-128k-instruct"
    "microsoft/Phi-3.5-mini-instruct"
)

qwen=(
    "Qwen/Qwen2.5-1.5B"
    "Qwen/Qwen2.5-1.5B-Instruct"
    "Qwen/Qwen2.5-7B"
    "Qwen/Qwen2.5-7B-Instruct"
    "Qwen/Qwen2.5-14B"
    "Qwen/Qwen2.5-14B-Instruct"
    "Qwen/Qwen2.5-72B"
    "Qwen/Qwen2.5-72B-Instruct"
    "Qwen/Qwen2.5-Math-1.5B"
    "Qwen/Qwen2.5-Math-1.5B-Instruct"
    "Qwen/Qwen2.5-Math-7B-Instruct"
    "Qwen/Qwen2.5-Math-72B"
    "Qwen/Qwen2.5-Math-72B-Instruct"
)

models=(
    "${llama3_2[@]}"
    "${llama3_1[@]}"
    "${llama3[@]}"
    "${llama2[@]}"
    "${gpt[@]}"
    "${nvidia[@]}"
    "${gemma[@]}"
    "${phi[@]}"
    "${mistral[@]}"
    "${qwen[@]}"
)

for model in "${models[@]}"; do
    echo "Downloading $model..."
    huggingface-cli download "$model" --repo-type model
done

chmod -R 555 $HF_HOME
