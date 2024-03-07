import StyledComponentsRegistry from './lib/registry'

/**
  * The root layout for the application.
  * 
  * @param props - The children to render in the layout.
  * @returns - The root layout for the application.
 */
export default function RootLayout(props: React.PropsWithChildren) {
  return (
    <html>
      <body>
        <StyledComponentsRegistry>
          {props.children}
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
