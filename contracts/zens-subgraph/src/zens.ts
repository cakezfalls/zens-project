import {
  DomainExtended as DomainExtendedEvent,
  DomainRegistered as DomainRegisteredEvent,
  FundsWithdrawn as FundsWithdrawnEvent,
  PriceChanged as PriceChangedEvent
} from "../generated/ZENS/ZENS"
import {
  DomainExtended,
  DomainRegistered,
  FundsWithdrawn,
  PriceChanged
} from "../generated/schema"

export function handleDomainExtended(event: DomainExtendedEvent): void {
  let entity = new DomainExtended(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.name = event.params.name
  entity.newExpiration = event.params.newExpiration

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleDomainRegistered(event: DomainRegisteredEvent): void {
  let entity = new DomainRegistered(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.name = event.params.name
  entity.owner = event.params.owner
  entity.expired = event.params.expired

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleFundsWithdrawn(event: FundsWithdrawnEvent): void {
  let entity = new FundsWithdrawn(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.to = event.params.to
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlePriceChanged(event: PriceChangedEvent): void {
  let entity = new PriceChanged(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.newPrice = event.params.newPrice

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
