
import { MutexAcceptor, MutexServer } from 'mutex-server'
import { SimpleCalculator } from '../provider/SimpleCalculator'

async function main () {
    const server = new MutexServer()
    server.open(10101, async (acceptor: MutexAcceptor<null, SimpleCalculator>) => {
        acceptor.accept(new SimpleCalculator())
    })
}

main()