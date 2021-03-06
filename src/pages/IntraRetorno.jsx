export function IntraRetorno({ clients, filteredClients }) {
    return (
        <>
            <span>
                Grupo: DITI - OPERACAO INTRANET / CORPORATIVO<br />
                IC AFETADO: INOV - INOVACAO_RTN<br />
                Template: PLATAFORMA OPEN<br />
                <br />
                ==================<br />
                SERVIDORES<br />
                ==================<br />
                DITI - OPERACAO INTRANET / CORPORATIVO<br />
            </span>

                CORP
                <table>
                    <tbody>
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
                    </tbody>
                </table><br />

                NEXT
                <table>
                    <tbody>
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
                    </tbody>
                </table><br />

                PIX
                <table>
                    <tbody>
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
                    </tbody>
                </table><br />


                <p>
                --------------------------------------------------------------------------<br />
                1?? - OAUTH MANAGER<br />
                --------------------------------------------------------------------------<br />
                <br />
                ------------------------------------------------------------------<br />
                Apagando cadastro dos parceiros CORP<br />
                ------------------------------------------------------------------<br />
                - Logar no 10.222.24.166:8443/oauth/manager ou 10.222.24.167:8443/oauth/manager<br />
                - Clicar em 'Clients'<br />
                - Repetir os passos abaixos, alterando o campo "NOME PARCEIRO" pela lista abaixo.<br />
                <br />


                {clients.map((item) => (

                    <span id='list-name' key={item.clientKey}>{item.razaoSocial}</span>

                ))}

                <br />
                - Procurar no campo  Client Name (app) o name "NOME PARCEIRO"<br />
                - Acionar o bot??o delete confirmando a op????o<br />
                Caso n??o encontrado, usar a op????o de busca pelo navegador (ctrl + F) e tamb??m mudar a pagina????o nas setas "- Back" ou "Next -".<br />
                <br />

                ------------------------------------------------------------------<br />
                Apagando cadastro dos parceiros NEXT<br />
                ------------------------------------------------------------------<br />
                - Logar no 10.197.204.40:8443/oauth/manager ou 10.197.204.41:8443/oauth/manager<br />
                - Clicar em 'Clients'<br />
                - Repetir os passos abaixos, alterando o campo "NOME PARCEIRO" pela lista abaixo.<br />
                <br />

                {clients.map((item) => (

                    <span id='list-name' key={item.clientKey}>{item.razaoSocial}</span>

                ))}


                <br />
                - Clicar em 'Clients'<br />
                - Procurar no campo  Client Name (app) o name "NOME PARCEIRO"<br />
                - Acionar o bot??o delete confirmando a op????o<br />
                Caso n??o encontrado, usar a op????o de busca pelo navegador (ctrl + F) e tamb??m mudar a pagina????o nas setas "- Back" ou "Next -".<br />
                <br />

                ------------------------------------------------------------------<br />
                Apagando cadastro dos parceiros PIX<br />
                ------------------------------------------------------------------<br />
                - Logar no 10.222.25.189:8443/oauth/manager ou 10.222.25.190:8443/oauth/manager<br />
                - Clicar em 'Clients'<br />
                - Repetir os passos abaixos, alterando o campo "NOME PARCEIRO" pela lista abaixo.<br />
                <br />

                {filteredClients.map((item) => (

                    <span id='list-name' key={item.clientKey}>{item.razaoSocial}</span>

                ))}


                <br />
                - Clicar em 'Clients'<br />
                - Procurar no campo  Client Name (app) o name "NOME PARCEIRO"<br />
                - Acionar o bot??o delete confirmando a op????o<br />
                Caso n??o encontrado, usar a op????o de busca pelo navegador (ctrl + F) e tamb??m mudar a pagina????o nas setas "- Back" ou "Next -".<br />
            </p>
        </>
    )
}