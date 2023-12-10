/*******************************************************************************
 *   (c) 2023 unipackage
 *
 *  Licensed under the GNU General Public License, Version 3.0 or later (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      https://www.gnu.org/licenses/gpl-3.0.en.html
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 ********************************************************************************/

export {
    IRPC,
    RPCEngineConfig,
    RPCOptions,
    RPCRequest,
    RPCResponse,
    RPCResultRulesOptions,
    RPCRetryOptions,
    isRPCOptions,
    DefaultOptions,
} from "./rpc/interface"
export { FilecoinRPC } from "./rpc/implements/filecoin"
export { withRequestMethod } from "./rpc/withMethod"

export { withMethods } from "./shared/withMethods"
export { InputParams } from "./shared/types/params"

export {
    defaultTransactionOptions,
    EvmType,
    EvmInput,
    EvmOutput,
    EvmTransactionOptions,
    IEVM,
    isEvmTransactionOptions,
} from "./evm/interface"
export { Web3Evm } from "./evm/implements/web3"
export { EthersEvm } from "./evm/implements/ether"
export {
    getEncodedParamsFromTxinput,
    getFunctionSignatureFromTxinput,
} from "./evm/implements/web3/tools"
export { withCallMethod, withSendMethod } from "./evm/withMethod"
