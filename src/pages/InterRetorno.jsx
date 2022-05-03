export function InterRetorno({ clients, filteredClients }) {
    return (
        <>
            <p>
                Grupo: DITI - OPERACAO INTERNET<br />
                IC AFETADO: INOV - INOVACAO_RTN<br />
                Template: PLATAFORMA OPEN<br />
                <br />
                ==================<br />
                SERVIDORES<br />
                ==================<br />
                DITI - OPERACAO INTERNET<br />

                OPENAPI
                <table>
                    <tr>
                        <th>Servidor</th>
                        <th>IP</th>
                        <th>Sistema Operacional</th>
                    </tr>
                    <tr>
                        <td>IM-AL-AP-061</td>
                        <td>10.215.113.10</td>
                        <td>Linux</td>
                    </tr>
                    <tr>
                        <td>IM-AL-AP-062</td>
                        <td>10.215.113.11</td>
                        <td>Linux</td>
                    </tr>
                </table><br />

                <br />
                --------------------------------------------------------------------------<br />
                1º - OAUTH MANAGER<br />
                --------------------------------------------------------------------------<br />
                <br />
                ------------------------------------------------------------------<br />
                Apagando cadastro dos parceiros<br />
                ------------------------------------------------------------------<br />
                - Logar no 10.215.113.10:8443/oauth/manager ou 10.215.113.11:8443/oauth/manager<br />
                - Clicar em 'Clients'<br />
                - Repetir os passos abaixos, alterando o campo "NOME PARCEIRO" pela lista abaixo.<br /><br />

                {clients.map((item) => (
                    <li id='list-name' key={item.organization}>
                        <p>{item.razaoSocial}</p>
                    </li>
                ))}
                <br />

                - Procurar no campo  Client Name (app) o name "NOME PARCEIRO"<br />
                - Acionar o botão delete confirmando a opção<br />
                Caso não encontrado, usar a opção de busca pelo navegador (ctrl + F) e também mudar a paginação nas setas "- Back" ou "Next -".<br />
                <br />
                --------------------------------------------------------------------------<br />
                2º - POLICY MANAGER<br />
                --------------------------------------------------------------------------<br />
                <br />
                ------------------------------------------------------------------<br />
                Apagando cadastro dos parceiros<br />
                ------------------------------------------------------------------<br />
                <br />
                Abrindo a aplicação<br />
                - Executar o aplicativo CA API Gateway Policy Manager.exe (caso necessário solicitar a aplicação ao Analista responsavel pelo acompanhamento da tarefa Time API)<br />
                - Após inicialização da aplicação no canto superior - esquerdo clicar no Botão 'Connect'<br />
                - Na tela de Login, selecionar o radioButton 'User Name / Password' e inserir as informações de usuário e senha para o login.<br />
                - No campo 'Gateway' inserir o ip de um dos servidores de produção informados (10.215.113.10 ou 10.215.113.11) e clicar em OK<br />
                - Caso tenha falha, utilizar a conexão via porta 9443.<br />
                - Aceitar todas informações de certificado que o gateway solicitar, isto ocorre devido ao primeiro login.<br />
                <br />
                - Repetir os passos abaixos, alterando o campo "NOME PARCEIRO" pela lista abaixo.<br />
                <br />

                {clients.map((item) => (
                    <li id='list-name' key={item.organization}>
                        <p>{item.policy.certificateName}</p>
                    </li>
                ))}

                <br />
                - Clicar em Tasks - Certificats, Keys and Secrets - Manage Certificates<br />
                - Procurar na lista o nome "NOME PARCEIRO", clicar na linha e acionar o botão Remove<br />
                <br />
                ------------------------------------------------------------------<br />
                Apagando usuário mTLS Pix<br />
                ------------------------------------------------------------------<br />
                <br />
                - Repetir os passos abaixos, alterando o campo "NOME PARCEIRO" pela lista abaixo.<br />
                <br />
                {filteredClients.map((item) => (
                    <li id='list-name' key={item.organization}>
                        <p>{item.policy.certificateName}</p>
                    </li>
                ))}
                <br />
                - No canto superior esquerdo da tela, clicar no campo Identity Providers<br />
                - Clicar com o botão direito sobre o nome PIX<br />
                - Selecionar a opção "Search Identity Provider"<br />
                - Clicar em "Search"<br />
                - Buscar na coluna "Name" o nome "NOME PARCEIRO"<br />
                - Clicar sobre a linha<br />
                - Clicar no botão "Delete", confirme a exclusão<br />
            </p>
        </>
    )
}