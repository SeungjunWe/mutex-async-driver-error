import { MutexConnector } from "mutex-server";
import { SimpleCalculator } from "../provider/SimpleCalculator";


/**
 * if this function is not async,
 * it's working fine
 */
async function getDriver(connector: MutexConnector<null, null>) {
    return connector.getDriver<SimpleCalculator>();
}

async function main(): Promise<void>
{
    let connector = new MutexConnector<null, null>(null, null);
    await connector.connect("http://127.0.0.1:10101");

    let calc = await getDriver(connector)

    console.log("1 + 6 = ", await calc.add(1, 6));

    await connector.close();
}

main()