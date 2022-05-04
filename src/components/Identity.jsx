export function Identity({ itens }) {
    return (
        <>
            {itens.map((item) => (
                <li key={item.policy.certificateName}>
                    <p>
                        --------------------------------------------------------------------------------------<br />
                        {item.razaoSocial}<br />
                        --------------------------------------------------------------------------------------<br />
                        - No canto superior esquerdo da tela, clicar no campo Identity Providers<br />
                        - Clicar com o botão direito sobre o nome PIX'<br />
                        - Selecionar a opção Create User<br />
                        - No campo 'X509 Subject DN', colar o valor: "
                        
                        {item.policy.chain.map((element,index) => {
                            if(index === 0) {
                                return (
                                <span id="subject" key={element.subjectDn}>{element.subjectDn}</span>
                                )
                            }
                        })}
                        
                        "<br />
                        - No campo 'User Name', apagar o valor inserido automaticamente caso apareça, e substituir por "{item.policy.certificateName}"<br />
                        - Selecionar a opção 'Define Additional Properties'<br />
                        - Clicar em Create<br />
                        - Com o modal aberto, selecionar a opção Certificate<br />
                        - Selecionar Import<br />
                        - Clicar em "Import" - Selecionar o "import from a File" e selecionar "{item.policy.certificateName.toLowerCase()}.cer" que está em RDMXXXXXX.zip e clicar em next<br />
                        - Clicar em Next<br />
                        - Clicar em Finish<br />
                        - Clicar em Replace caso apareça<br />
                        - Clicar em OK'<br />
                    </p>

                </li>
            ))}
        </>
    )
}