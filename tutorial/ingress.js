/*
 * Copyright 2019 IBM Corporation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const solsa = require('solsa')
const bundle = new solsa.Bundle()
module.exports = bundle

bundle.service = new solsa.ContainerizedService({ name: 'hello-john', image: 'docker.io/ibmcom/kn-helloworld', port: 8080, env: { TARGET: 'John' } })
bundle.ingress = bundle.service.getIngress()

/*
Try:

curl $(kubectl get ingress hello-john -o jsonpath={.spec.rules[0].host})
*/
