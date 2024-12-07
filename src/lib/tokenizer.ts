// lib/tokenizer/index.ts
export class Tokenizer {
  private tokenToId: { [key: string]: number };
  private tokenToColor: { [key: number]: string } = {};

  constructor(vocab: TokenizerVocab) {
    this.tokenToId = vocab.model.vocab;
  }

  tokenize(text: string): string[] {
    const tokens: string[] = [];
    let currentToken = "";

    for (const char of text) {
      if (this.tokenToId[currentToken + char] !== undefined) {
        currentToken += char;
      } else {
        if (currentToken) {
          tokens.push(currentToken);
        }
        currentToken = char;
      }
    }
    if (currentToken) {
      tokens.push(currentToken);
    }
    return tokens;
  }

  tokensToIds(tokens: string[]): number[] {
    return tokens.map(
      (token) => this.tokenToId[token] ?? this.tokenToId["<unk>"] ?? -1
    );
  }

  mapTokensToColors(
    tokens: string[],
    tokenIds: number[]
  ): [string, number, string][] {
    const result: [string, number, string][] = [];

    for (let i = 0; i < tokens.length; i++) {
      const tokenId = tokenIds[i];
      if (!this.tokenToColor[tokenId]) {
        this.tokenToColor[tokenId] = `#${Math.floor(Math.random() * 0xffffff)
          .toString(16)
          .padStart(6, "0")}`;
      }
      result.push([tokens[i], tokenId, this.tokenToColor[tokenId]]);
    }

    return result;
  }
}
