import jwt from 'jsonwebtoken'

const JWT_SECRET = process.env.JWT_SECRET || 'secret'

export const hasSalesRole = (token: string): boolean => {
  try {
    const decoded = jwt.verify(token, JWT_SECRET) as {
      role: string
    }
    return true
   /*  return decoded['role'] === 'VENTAS' */
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error('Error al verificar el token:', error.message)
    } else {
      console.error('Error al verificar el token:', error)
    }
    return false
  }
}
export const hasAdminRole = (token: string): boolean => {
  try {
    const decoded = jwt.verify(token, JWT_SECRET) as {
      role: string
    }
    return true
    /* return decoded['role'] === 'ADMIN' */
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error('Error al verificar el token:', error.message)
    } else {
      console.error('Error al verificar el token:', error)
    }
    return false
  }
}
