import { useEffect, useState } from 'react';
import api from '../services/api';
import { Link } from 'react-router-dom';

import { Oauth } from '../components/Oauth';
import { CaGateway } from '../components/CaGateway';
import { Identity } from '../components/Identity';
import { InterRetorno } from './InterRetorno';

export function Internet() {

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
                <Link to={"/intra"}>INTRANET</Link>
            </button>
            <p>
                Grupo: DITI - OPERACAO INTERNET EMPRESAS / CORPORATIVO<br />
                IC AFETADO: INOV - INOVACAO_RTN<br />
                Template: PLATAFORMA OPEN<br />

                ==================<br />
                SERVIDORES<br />
                ==================<br />
                IM -AL-AP-061 --  10.215.113.10<br />
                IM -AL-AP-062 --  10.215.113.11<br />
                <br />

                --------------------------------------------------------------------------<br />
                1º - OAUTH MANAGER<br />
                --------------------------------------------------------------------------<br />
                Logar no https://10.215.113.10:8443/oauth/manager<br />
                Clicar em 'Clients'<br />
                ------------------------------------------------------------------------------------<br />
            </p>

            <Oauth itens={clients} />

            <p>
                ----------------------------------------<br />
                VERIFICAÇÃO DE SINCRONISMO<br />
                ----------------------------------------<br />
                Ao final do procedimento entrar nos dois oauth para verificar se o sincronismo do cadastro aconteceu<br />
                https://10.215.113.10:8443/oauth/manager<br />
                https://10.215.113.11:8443/oauth/manager<br />
                ----------------------------------------<br />
                <br />

                ----------------------------------------------------------------------------<br />
                2°- IMPORTANDO CERTIFICADOS CA<br />
                Abrindo a aplicação<br />
                ----------------------------------------------------------------------------<br />
                <br />
                Executar o aplicativo CA API Gateway Policy Manager.exe<br />
                Após inicialização da aplicação no canto superior - esquerdo clicar no Botão 'Connect'<br />
                Na tela de Login, selecionar o radioButton 'User Name / Password' e inserir as informações de usuário e senha para o login.<br />
                No campo 'Gateway' inserir o ip de um dos servidores de produção informados (10.215.113.10 ou 10.215.113.11) e clicar em OK<br />
                Aceitar todas informações de certificado que o gateway solicitar, isto ocorre devido ao primeiro login.<br />
                <br />
                --------------------------------------------------------------------------<br />
            </p>

            <CaGateway itens={clients} />

            <p>
                ----------------------------------------------------------------------------------<br />
                ------------------------------------------------<br />
                CRIANDO USUÁRIO NO IDENTITY PROVIDERS<br />
                ------------------------------------------------<br />
                ----------------------------------------------------------------------------------<br />
            </p>

            <Identity itens={filteredClients} />

            <p>=========================================================================================================================================================================</p>
            <p>=========================================================================================================================================================================</p>
            <p>=========================================================================================================================================================================</p>


            <InterRetorno clients={clients} filteredClients={filteredClients}/>

        </div>
    )
}