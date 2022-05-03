import { useEffect, useState } from 'react';
import api from '../services/api';
import { Link } from 'react-router-dom';

import { Oauth } from '../components/Oauth';

import { IntraRetorno } from './IntraRetorno';

export function Intranet() {

    const [clients, setClients] = useState([]);
    const [filteredClients, setFilteredClients] = useState([]);


    useEffect(() => {
        async function fetchEnvironment() {
            const response = await api.get('/parceiros')
            setClients(response.data)

            const filtered = response.data.filter((client) => client.policy.identityProvider == true)

            setFilteredClients(filtered)
        }
        fetchEnvironment();
    }, []);


    return (
        <div>
            <button>
                <Link to={"/"}>INTERNET</Link>
            </button>

            <p>
                GRUPO: DITI - OPERACAO INTRANET / CORPORATIVO<br />
                IC AFETADO: INOV - INOVACAO_RTN<br />
                Template: PLATAFORMA OPEN<br />
                <br />
                ==================<br />
                SERVIDORES<br />
                ==================<br />
                DITI - OPERACAO INTRANET / CORPORATIVO<br />
                <br />


                CORP
                <table>
                    <tr>
                        <th>Servidor</th>
                        <th>IP</th>
                        <th>Sistema Operacional</th>
                    </tr>
                    <tr>
                        <td>MZ-AL-AP-013</td>
                        <td>10.222.24.166</td>
                        <td>Linux</td>
                    </tr>
                    <tr>
                        <td>MZ-AL-AP-014</td>
                        <td>10.222.24.167</td>
                        <td>Linux</td>
                    </tr>
                    <tr>
                        <td>MZ-AL-AP-049</td>
                        <td>10.222.24.204</td>
                        <td>Linux</td>
                    </tr>
                </table><br />

                NEXT
                <table>
                    <tr>
                        <th>Servidor</th>
                        <th>IP</th>
                        <th>Sistema Operacional</th>
                    </tr>
                    <tr>
                        <td>MZ-AL-AP-130</td>
                        <td>10.197.204.40</td>
                        <td>Linux</td>
                    </tr>
                    <tr>
                        <td>MZ-AL-AP-131</td>
                        <td>10.197.204.40</td>
                        <td>Linux</td>
                    </tr>
                </table><br />

                PIX
                <table>
                    <tr>
                        <th>Servidor</th>
                        <th>IP</th>
                        <th>Sistema Operacional</th>
                    </tr>
                    <tr>
                        <td>MZ-AL-AP-125</td>
                        <td>10.222.25.189</td>
                        <td>Linux</td>
                    </tr>
                    <tr>
                        <td>MZ-AL-AP-126</td>
                        <td>10.222.25.190</td>
                        <td>Linux</td>
                    </tr>
                </table><br />

                <p>
                    --------------------------------------------------------------------------<br />
                    1º - OAUTH MANAGER<br />
                    --------------------------------------------------------------------------<br />
                    Logar no https://10.222.24.166:8443/oauth/manager<br />
                    Clicar em 'Clients'<br />
                    ------------------------------------------------------------------------------------<br />
                </p>

                <Oauth itens={clients} />

                <p>
                    ----------------------------------------<br />
                    VERIFICAÇÃO DE SINCRONISMO<br />
                    ----------------------------------------<br />
                    Ao final do procedimento entrar nos dois oauth para verificar se o sincronismo do cadastro aconteceu<br />
                    https://10.222.24.166:8443/oauth/manager<br />
                    https://10.222.24.167:8443/oauth/manager<br />
                    ----------------------------------------<br />
                    <br /><br />

                    --------------------------------------------------------------------------<br />
                    2º - OAUTH MANAGER NEXT - cadastro<br />
                    --------------------------------------------------------------------------<br />
                    Logar no https://10.197.204.40:8443/oauth/manager ou https://10.197.204.41:8443/oauth/manager<br />
                    Clicar em 'Clients'<br /><br />
                </p>

                <Oauth itens={clients} />


                <p>
                    ----------------------------------------<br />
                    VERIFICAÇÃO DE SINCRONISMO<br />
                    ----------------------------------------<br />
                    Ao final do procedimento entrar nos dois oauth para verificar se o sincronismo do cadastro aconteceu<br />
                    https://10.197.204.40:8443/oauth/manager<br />
                    https://10.197.204.41:8443/oauth/manager<br />
                    ----------------------------------------<br />
                    <br />

                    --------------------------------------------------------------------------<br />
                    3º - OAUTH MANAGER PIX - cadastro<br />
                    --------------------------------------------------------------------------<br />
                    Logar no https://10.222.25.189:8443/oauth/manager ou https://10.222.25.190:8443/oauth/manager<br />
                    Clicar em 'Clients'<br /><br />
                </p>

                <Oauth itens={filteredClients} />
            </p>


            <p>=========================================================================================================================================================================</p>
            <p>=========================================================================================================================================================================</p>
            <p>=========================================================================================================================================================================</p>

            <IntraRetorno clients={clients} filteredClients={filteredClients}/>
        </div>
    )
}