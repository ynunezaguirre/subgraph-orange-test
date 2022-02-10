import { BigInt } from "@graphprotocol/graph-ts"
import {
  Mint
} from "../generated/ERC1967Proxy/ERC1967Proxy"
import { MintEvent } from "../generated/schema"


export function handleMint(event: Mint): void {
  let entity = MintEvent.load(event.transaction.hash.toHex())
  if (!entity) {
    entity = new MintEvent(event.transaction.hash.toHex())
  }
  entity.from = event.transaction.from;
  entity.owner = event.params.wallet
  entity.hnId = event.params.hnId.toHexString()
  entity.block = event.block.number
  entity.save()
}
