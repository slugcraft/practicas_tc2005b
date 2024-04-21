SELECT m.descripcion, p.razonsocial 
FROM ENTREGAN e 
	JOIN MATERIALES m on e.clave = m.clave 
	JOIN PROVEEDORES p on e.rfc = p.rfc 
WHERE m.descripcion LIKE "Ladrillos%";