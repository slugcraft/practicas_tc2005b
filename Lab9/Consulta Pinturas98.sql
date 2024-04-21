SELECT m.descripcion "Descripcion del material", p.razonsocial "Razon social del proveedor", pr.denominacion "Denominacion del proyecto", e.fecha, e.cantidad 
FROM ENTREGAN e 
	JOIN MATERIALES m on m.clave = e.clave 
	JOIN PROVEEDORES p on p.rfc = e.rfc
	JOIN PROYECTO pr on pr.numero = e.numero 
WHERE e.fecha LIKE "1998%";