import { BigInt } from "@graphprotocol/graph-ts"
import {
  Mint
} from "../generated/ERC1967Proxy/ERC1967Proxy"
import { Minter } from "../generated/schema"


export function handleMint(event: Mint): void {
  let entity = Minter.load(event.transaction.from.toHex())
  if (!entity) {
    entity = new Minter(event.transaction.from.toHex())
  }
  entity.hash = event.transaction.hash;
  entity.wallet = event.params.wallet
  entity.hnId = event.params.hnId.toHexString()
  entity.save()
}
