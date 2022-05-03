export function CaGateway({ itens }) {
    return (
        <>
            {itens.map((item) => (
                <li key={item.policy.certificateName}>
                    <p>
                        --------------------------------------------------------------------------<br />
                        {item.razaoSocial}<br />
                        --------------------------------------------------------------------------<br />
                        Clicar em Tasks - Certificats, Keys and Secrets - Manage Certificates<br />
                        Clicar em 'ADD' - Selecionar o 'import from a File' e selecionar "{item.policy.certificateName.toLowerCase()}.cer" que está em  RDMXXXXXX.zip e clicar em next<br />
                        Alterar o campo 'Certificate name para "{item.policy.certificateName}" e clicar em next<br />
                        Marcar 'Outbound SSL connections', 'Signing Certificates for Outbound SSl connections', 'Signing Client Certicates' clicar em next<br />
                        Marcar 'Certificate is a Trust Anchor' e clicar em finish<br />
                    </p>
                </li>
            ))}
        </>
    )
}