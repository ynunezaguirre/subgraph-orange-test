import { BigInt } from "@graphprotocol/graph-ts"
import {
  Mint
} from "../generated/ERC1967Proxy/ERC1967Proxy"
import { Minter } from "../generated/schema"


export function handleMint(event: Mint): void {
  let entity = Minter.load(event.transaction.hash.toHex())
  if (!entity) {
    entity = new Minter(event.transaction.hash.toHex())
  }
  entity.from = event.transaction.from;
  entity.token = event.params.wallet
  entity.hnId = event.params.hnId.toHexString()
  entity.block = event.block.number
  entity.save()
}
