{
  description = "Monadojs development environment";

  inputs.nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";

  outputs = { self, nixpkgs }:
    let
      system = "x86_64-linux";
      pkgs = nixpkgs.legacyPackages.${system};
    in
    {
      devShells.${system}.default = pkgs.mkShell {
        packages = with pkgs; [
          bun
          lefthook
        ];

        shellHook = ''
          if [ ! -d "$PWD/node_modules" ]; then
            echo "→ Dependencies missing. Run: bun install"
          fi
        '';
      };
    };
}
