export function Oauth({itens}) {
    return (
        <>
        {itens.map((item) => (
        <li key={item.cnpj}>

            <p>
              -----------------------------------------------------------------------------------<br />
              {item.razaoSocial}<br />
              -----------------------------------------------------------------------------------<br />
              <br />
              Clicar em 'Clients'<br />
              Clicar no botao 'REGISTER A NEW CLIENT'<br />
              Preencher os campos:<br />
              <br />

              Client Name: {item.oauth.clientName}<br />
              Organization: {item.oauth.organization}<br />
              Description: {item.oauth.description}<br />
              Scope: {item.oauth.scope}<br />
              <br />
              Client - key: Substituir o valor que já está no campo por este: "{item.oauth.clientKey}"<br />
              Client - secret: Substituir o valor que já está no campo por este: "{item.oauth.clientSecret}"<br />
            </p>

          </li>
          ))}
        </>
    )
}